package com.contas.Conta.domain.service;

import com.contas.Conta.domain.model.Conta;
import com.contas.Conta.domain.repository.ContaRepository;
import com.contas.Conta.model.ContaDto;
import com.contas.Conta.model.ContaResponseDto;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContaService {

    @Autowired
    private ContaRepository contaRepository;

    @Transactional
    public ContaResponseDto salvar(ContaDto dados) {
        Conta conta = new Conta();
        conta.setTitulo(dados.titulo());
        conta.setValor(dados.valor());
        conta.setVencimento(dados.vencimento());
        conta.setPagoEm(dados.pagoEm());
        conta.setJuros(dados.juros());

        contaRepository.save(conta);

        return new ContaResponseDto(conta);
    }

    public List<ContaDto> listarContas(){
        return contaRepository.findAll().stream().map(ContaDto::new).toList();
    }

    @Transactional
    public ContaResponseDto editConta(Long id, ContaDto dados){
        Conta conta = this.contaRepository.getReferenceById(id);
        if ( conta != null) {
            conta.setTitulo(dados.titulo());
            conta.setVencimento(dados.vencimento());
            conta.setValor(dados.valor());
            conta.setJuros(dados.juros());
            conta.setPagoEm(dados.pagoEm());
        }
        return new ContaResponseDto(conta);
    }

    public ContaDto pesquisarPorId(Long id){
        Conta conta = this.contaRepository.getReferenceById(id);
        if (conta != null) {
            return new ContaDto(conta);
        }
       return null;
    }

}
