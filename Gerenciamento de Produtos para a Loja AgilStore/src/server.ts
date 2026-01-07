import { app } from "./app.js";
import "dotenv/config";
import { saveLastId } from "./utils/generateId.js";

const PORT = Number(process.env.PORT) || 3000;

// Listen do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Salva o ultimo ID quando o backend parar
const handleExit = async (signal?: string) => {
  console.log(`\nEncerrando o servidor... ${signal || ""}`);
  await saveLastId();
  process.exit();
};

// CTRL+C
process.on("SIGINT", () => handleExit("SIGINT"));