function calcularRendimentos(aporteInicial, aportesMensais, taxaJurosAnual, taxaInflacaoAnual, periodo) {
    const taxaJurosMensal = Math.pow(1 + taxaJurosAnual, 1 / 12) - 1;
    const taxaInflacaoMensal = Math.pow(1 + taxaInflacaoAnual, 1 / 12) - 1;
    let saldoAcumulado = aporteInicial;
    let saldoAcumuladoReal = aporteInicial / (1 + taxaInflacaoMensal);
  
    for (let i = 1; i <= periodo; i++) {
      saldoAcumulado += aportesMensais;
      saldoAcumulado *= 1 + taxaJurosMensal;
      saldoAcumuladoReal += aportesMensais / (1 + taxaInflacaoMensal);
    }
  
    return {
      saldoAcumulado,
      saldoAcumuladoReal
    };
  }
  
  // Exemplo de uso
  const aporteInicial = 1000;
  const aportesMensais = 1000;
  const taxaJurosAnual = 0.12; // 12%
  const taxaInflacaoAnual = 0.04; // 4%
  const periodo = 240; // 120 meses / 10 anos
  
  const resultados = calcularRendimentos(aporteInicial, aportesMensais, taxaJurosAnual, taxaInflacaoAnual, periodo);
  
  console.log("Saldo Acumulado: " + resultados.saldoAcumulado.toFixed(2));
  console.log("Saldo Acumulado Real: " + resultados.saldoAcumuladoReal.toFixed(2));
  