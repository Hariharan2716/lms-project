let users = [];

export async function POST(req) {
  try{
    const {name, email, password} = await req.json();

    // Basic validation
    if(!name || !email || !password) {
      return new Response(
        JSON.stringify({message: "All fields are required"}),
        {status: 400}
      );
    }

    // Check for duplicate email
    const existingUser = users.find((u) => u.email === email);
    if(existingUser) {
      return new Response(
        JSON.stringify({message: "Email already registered"}),
        {status: 400}
      );
    }
    // Store new user in mock array
    const newUser = {id: Date.now(), name, email, password};
    users.push(newUser);

    return new Response(
      JSON.stringify({message: "User registered successfully", user: newUser}),
      {status: 201}
    );
  } catch(error) {
    return new Response(JSON.stringify({message: "Invalid request"}), {
      status: 500,
    });
  }
}