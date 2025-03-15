# Docy - Document Creation Platform

Docy is a modern document creation and collaboration platform built with Next.js, featuring real-time editing, markdown support, and secure authentication.

## Features

- 📝 Rich text document creation and editing
- 🔒 Secure authentication with Clerk
- 🌓 Dark/Light theme support
- 📱 Responsive design
- 💾 Document auto-saving
- 🔍 Markdown preview support

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React Framework
- [Prisma](https://www.prisma.io/) - Database ORM
- [Clerk](https://clerk.com/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Draft.js](https://draftjs.org/) - Rich Text Editor

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd docy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in required environment variables

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # App router pages
├── components/         # Reusable components
├── lib/               # Utility functions and types
└── middleware.ts      # Authentication middleware
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
