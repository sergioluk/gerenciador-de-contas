package com.contas.Conta.domain.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Table(name = "contas")
@Entity(name = "Conta")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Conta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "titulo")
    private String titulo;
    @Column(name = "valor")
    private Double valor;
    @Column(name = "vencimento")
    private LocalDate vencimento;
    @Column(name = "pagoem")
    private LocalDate pagoEm = null;
    @Column(name = "juros")
    private Double juros;

    @Transient
    public String dataConvertida(){
        //LocalDate data = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return vencimento.format(formatter);
    }

    public Double calcularJuros(){
        if (pagoEm != null) {
            return valor;
        }
        var dataAtual = LocalDate.now();
        var diferenca = ChronoUnit.DAYS.between(vencimento, dataAtual);
        System.out.println("Difereca entre dataatual: " + dataAtual + " e vencimento: " + vencimento + " Diferenã é : " + diferenca);
        if (diferenca > 0){
            return (diferenca * juros * 100) + valor;
        } else {
            return valor;
        }
    }
}
