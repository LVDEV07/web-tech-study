
const campos = [
    {
        id: "email",
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        erro: "E-mail inválido (ex: usuario@dominio.com)",
        sucesso: "E-mail válido!"
    },
    {
        id: "cep",
        regex: /^\d{5}-\d{3}$/,
        erro: "CEP inválido (use o formato 00000-000)",
        sucesso: "CEP válido!"
    },
    {
        id: "telefone",
        regex: /^\(\d{2}\) \d{5}-\d{4}$/,
        erro: "Formato esperado: (00) 00000-0000",
        sucesso: "Celular válido!"
    },
    {
        id: "numeros",
        regex: /^\d+$/,
        erro: "O campo deve conter apenas números inteiros.",
        sucesso: "Apenas números detectados!"
    },
    {
        id: "nomes",
        regex: /^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/, 
        erro: "Apenas letras e espaços são permitidos.",
        sucesso: "Nome válido!"
    }
];

campos.forEach(({ id, regex, erro, sucesso }) => {
    const input = document.getElementById(id);

    const mensagem = document.createElement("span");
    mensagem.classList.add("mensagem");
    input.insertAdjacentElement("afterend", mensagem);

    input.addEventListener("input", () => {
        const valor = input.value;

        if (valor === "") {
            mensagem.textContent = "";
            input.classList.remove("valido", "invalido");
            mensagem.classList.remove("sucesso", "erro");
            return;
        }

        const valido = regex.test(valor);

        mensagem.textContent = valido ? sucesso : erro;

        input.classList.toggle("valido", valido);
        input.classList.toggle("invalido", !valido);
        mensagem.classList.toggle("sucesso", valido);
        mensagem.classList.toggle("erro", !valido);
    });
});