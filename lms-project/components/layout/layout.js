import connectToDatabase from "../../utils/mongodb";

export default function RootLayout({ children }) {
  connectToDatabase()
    .then(() => console.log(' MongoDB connection established'))
    .catch((err) => console.error(' MongoDB connection failed:', err));

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}