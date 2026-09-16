# Ahavidya Coming Soon — Static Page

This package is a dependency-free static landing page for ahavidya.com.

## Files
- index.html — page markup
- styles.css — responsive styling
- script.js — launch countdown and static notification interaction
- assets/ahavidya-logo.png — supplied Ahavidya logo
- assets/favicon.png — square favicon created from the supplied AV mark

## Launch date
October 2, 2026 (India time / Asia-Kolkata).

## AWS S3 / CloudFront
Upload the contents of this folder to the root of the S3 website/origin bucket.
Set `index.html` as the default root object in CloudFront.

No Next.js, Node.js, database, API, OTP, OAuth, or backend is required.

The notification form is intentionally frontend-only. Connect it to an email service/API later if subscriber collection is required.
