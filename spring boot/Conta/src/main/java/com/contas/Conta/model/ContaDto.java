package com.contas.Conta.model;

import com.contas.Conta.domain.model.Conta;

import java.time.LocalDate;
import java.util.Date;

public record ContaDto(
        Long id,
        String titulo,
        Double valor,
        LocalDate vencimento,
        LocalDate pagoEm,
        Double juros,
        String dataConvertida
) {
    public ContaDto(Conta conta){
        this(conta.getId(), conta.getTitulo(),conta.calcularJuros(),conta.getVencimento(),conta.getPagoEm(),conta.getJuros(), conta.dataConvertida());
    }
}
