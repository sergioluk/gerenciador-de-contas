package com.contas.Conta.model;

import com.contas.Conta.domain.model.Conta;

import java.time.LocalDate;
import java.util.Date;

public record ContaResponseDto(
        Long id,
        String titulo,
        Double valor,
        LocalDate vencimento,
        LocalDate pagoEm,
        Double juros
) {
    public ContaResponseDto(Conta conta){
        this(conta.getId(), conta.getTitulo(), conta.calcularJuros(), conta.getVencimento(), conta.getPagoEm(), conta.getJuros());
    }
}
