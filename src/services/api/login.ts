export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    console.log("Datos recibidos:", { email, password });

    res.status(200).json({
      message: "Usuario registrado exitosamente",
      user: { email },
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
