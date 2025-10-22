// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function Layout({ children }) {
//   return (
//     <>
//       <Navbar />
//       <main className="p-6">{children}</main>
//       <Footer />
//     </>
//   );
// }

// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow p-6">{children}</main>
      <Footer />
    </div>
  );
}
