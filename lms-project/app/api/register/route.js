import { connectDB } from "../../../utils/mongodb";
import User from "../../../models/User";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "Email already registered" }), { status: 400 });
    }

    // Create new user
    const newUser = await User.create({ name, email, password });

    return new Response(
      JSON.stringify({ message: "User registered successfully", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error in register route:", error);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
