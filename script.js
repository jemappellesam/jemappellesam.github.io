document.getElementById("calcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const gastoFixo = parseFloat(document.getElementById("gastoFixo").value);
    const precoVenda = parseFloat(document.getElementById("precoVenda").value);
    const gastoVariavel = parseFloat(document.getElementById("gastoVariavel").value);
    const lucro = parseFloat(document.getElementById("lucro").value);
    const receitaVenda = parseFloat(document.getElementById("receitaVenda").value);
    const capitalInvestido = parseFloat(document.getElementById("capitalInvestido").value);

    if (precoVenda <= gastoVariavel) {
        alert("⚠️ O preço de venda deve ser maior que o gasto variável!");
        return;
    }

    const pontoEquilibrio = gastoFixo / (precoVenda - gastoVariavel);
    const lucratividade = (lucro / receitaVenda) * 100;
    const rentabilidade = (lucro / capitalInvestido) * 100;

    const formatar = (valor, casasDecimais = 2) => {
        return valor.toLocaleString("pt-BR", { minimumFractionDigits: casasDecimais, maximumFractionDigits: casasDecimais });
    };

    document.getElementById("resultadoPE").textContent = 
        `Ponto de Equilíbrio: ${formatar(pontoEquilibrio)} unidades`;

    document.getElementById("resultadoLucro").textContent = 
        `Lucratividade: ${formatar(lucratividade)}%`;

    document.getElementById("resultadoRent").textContent = 
        `Rentabilidade: ${formatar(rentabilidade)}%`;
});
