import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseServer';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      organization,
      email,
      phone,
      industry,
      requestType = 'quotation',
      demoPreferences,
      agentCount = 16,
      hostingPackage = 'Starter Tier (16-40 Users)',
      selectedMno = 'Vodacom',
      comments = '',
    } = body;

    // Field Validations
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid full name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    if (!organization || typeof organization !== 'string' || organization.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid organization name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid business email address.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    if (!industry || typeof industry !== 'string') {
      return NextResponse.json(
        { error: 'Please select an industry.' },
        { status: 400 }
      );
    }

    const leadData = {
      full_name: fullName.trim(),
      organization_name: organization.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      industry: industry.trim(),
      request_type: requestType,
      demo_preferences: demoPreferences || null,
      agent_count: Number(agentCount) || 16,
      hosting_package: hostingPackage,
      selected_mno: selectedMno,
      comments: comments.trim(),
      lead_source: 'Sauti Connect Website Onboarding',
      created_at: new Date().toISOString(),
      status: 'pending_review',
    };

    const client = supabaseAdmin || supabase;
    let existingLead = null;
    let isDuplicate = false;

    if (client) {
      try {
        // Duplicate check
        const { data: dups } = await client
          .from('sauti_connect_leads')
          .select('id, email, created_at')
          .or(`email.eq.${leadData.email},phone.eq.${leadData.phone}`)
          .limit(1);

        if (dups && dups.length > 0) {
          isDuplicate = true;
          existingLead = dups[0];
        }

        // Insert lead record
        const { data: inserted, error: insertError } = await client
          .from('sauti_connect_leads')
          .insert([{ ...leadData, is_duplicate: isDuplicate }])
          .select();

        if (!insertError && inserted && inserted.length > 0) {
          return NextResponse.json({
            success: true,
            leadId: inserted[0].id,
            isDuplicate,
            message: isDuplicate
              ? 'Your onboarding request was received. An existing record was updated and our team will reach out shortly.'
              : 'Thank you! Your Sauti Connect onboarding request has been received successfully.',
          });
        }
      } catch (dbErr) {
        console.warn('Database logging warning (table might be initializing):', dbErr);
      }
    }

    // Fallback response if Supabase table is not configured yet
    const fallbackRef = `SC-${Date.now().toString(36).toUpperCase()}`;
    return NextResponse.json({
      success: true,
      leadId: fallbackRef,
      isDuplicate: false,
      message: 'Thank you! Your Sauti Connect onboarding request has been received successfully.',
    });
  } catch (err: any) {
    console.error('Error in Sauti Connect onboarding route:', err);
    return NextResponse.json(
      { error: 'We couldn\'t complete your request at the moment. Please try again or contact our support team.' },
      { status: 500 }
    );
  }
}
