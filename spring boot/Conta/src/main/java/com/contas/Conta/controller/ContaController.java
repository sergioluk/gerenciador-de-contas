package com.contas.Conta.controller;

import com.contas.Conta.domain.service.ContaService;
import com.contas.Conta.model.ContaDto;
import com.contas.Conta.model.ContaResponseDto;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("contas")
public class ContaController {

    @Autowired
    private ContaService contaService;

    @GetMapping
    public ResponseEntity<List<ContaDto>> obterContas(){
        return ResponseEntity.ok(contaService.listarContas());
    }

    @PostMapping
    public ResponseEntity<ContaResponseDto> cadastrarConta(@RequestBody ContaDto dados) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(contaService.salvar(dados));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContaDto> obterContaPorId(@PathVariable Long id){
        return ResponseEntity.ok(contaService.pesquisarPorId(id));
    }
    @PatchMapping("/{id}")
    public ResponseEntity<ContaResponseDto> editarConta(@PathVariable Long id, @RequestBody ContaDto dados) {
        return ResponseEntity.ok(contaService.editConta(id, dados));
    }

}
