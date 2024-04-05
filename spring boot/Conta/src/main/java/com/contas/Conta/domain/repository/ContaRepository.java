package com.contas.Conta.domain.repository;

import com.contas.Conta.domain.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContaRepository extends JpaRepository<Conta, Long> {
}
