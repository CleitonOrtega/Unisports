package com.Unisports.Uni.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Unisports.Uni.model.modelUsuario;
import com.Unisports.Uni.repository.repositoryUsuario;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/usuario")
public class controllerUsuario {

	@Autowired
	private repositoryUsuario repository;
	
	@GetMapping
	public List<modelUsuario> buscarTodos(){
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<modelUsuario> GetById(@PathVariable Long id){
		return repository.findById(id);
	}
	
	@GetMapping("/getEmail/{email}")
	public ResponseEntity<Optional<modelUsuario>> GetByEmail(@PathVariable String email){
		return ResponseEntity.ok(repository.findByEmail(email));
	}
	
	@PostMapping("/novoUsuario")
	public ResponseEntity<modelUsuario> post (@RequestBody modelUsuario nome){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(nome));
	}
	
	@PutMapping("/atualizacaoUsuario")
	public ResponseEntity<modelUsuario> put (@RequestBody modelUsuario nome){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(nome));			
	}
	
	@DeleteMapping("/exclusaoUsuario/{id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}
	
}
