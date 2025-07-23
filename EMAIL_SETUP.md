# Email Configuration Setup

## Current Implementation
The contact form currently uses a **mailto fallback** which works immediately - it opens the user's default email client with a pre-filled message to your email address.

## Upgrade to EmailJS (Recommended)

For a more professional experience where emails are sent directly through the form, follow these steps:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set up Email Service
1. Go to Email Services in your EmailJS dashboard
2. Add a new service (Gmail, Outlook, etc.)
3. Connect your email account (mmoncada105@gmail.com)

### 3. Create Email Template
1. Go to Email Templates
2. Create a new template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (mmoncada105@gmail.com)

### 4. Get Your Keys
- Service ID
- Template ID  
- Public Key

### 5. Update the Code
In `src/app/contact/page.tsx`, uncomment and update the EmailJS section:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your service ID
  'YOUR_TEMPLATE_ID',    // Replace with your template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'mmoncada105@gmail.com'
  },
  'YOUR_PUBLIC_KEY'      // Replace with your public key
)
```

### 6. Environment Variables (Optional)
Create a `.env.local` file to store your keys securely:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Then use them in your code:
```typescript
process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
```

## Alternative Solutions

### Option 1: Formspree
- Simple form handling service
- Free tier available
- Just change form action to their endpoint

### Option 2: Netlify Forms
- If deploying to Netlify
- Built-in form handling
- Add `data-netlify="true"` to form

### Option 3: Backend API
- Create your own API endpoint
- Use Next.js API routes
- More control but requires more setup

## Current Status
✅ **EmailJS Configured!** - Direct email sending through the contact form
✅ **Mailto Fallback** - Opens email client if EmailJS fails
✅ **Professional Experience** - Messages sent directly to mmoncada105@gmail.com

### Your EmailJS Configuration:
- Service ID: service_al1be1b
- Template ID: template_ipyi5y3
- Public Key: Vb9t-GfEjGql1_4_S
