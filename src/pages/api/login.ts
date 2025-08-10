export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    console.log("Datos recibidos:", { email, password });

    // ✅ Ahora devuelve un access_token como espera tu frontend
    res.status(200).json({
      message: "Login exitoso",
      access_token: "mock-jwt-token-12345", // Token genérico para testing
      user: { email },
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
