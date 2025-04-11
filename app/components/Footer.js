// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-100 py-4 mt-auto">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} Ambulance Tracking System. All rights reserved.
        </div>
      </footer>
    );
  }
  