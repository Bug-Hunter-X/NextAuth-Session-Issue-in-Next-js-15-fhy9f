# NextAuth Session Issue in Next.js 15

This repository demonstrates a bug encountered when using NextAuth.js with Next.js 15.  After upgrading to Next.js 15, the `unstable_getServerSession` function in `next-auth` consistently returns `null`, even when a user is logged in.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You'll notice that the page displays the 'Access denied' message, regardless of login status.

## Expected Behavior

The `/about` page should only display the 'Access denied' message if the user is not logged in.  Otherwise, it should display the 'You are logged in' message.

## Actual Behavior

The `/about` page always displays the 'Access denied' message, indicating a failure to retrieve the session.

## Possible Cause

This issue is likely related to changes in the way Next.js 15 handles middleware and session management.  The `unstable_getServerSession` function may not be functioning correctly in this context.  The solution below may not work in all scenarios.  Further investigation is required.
