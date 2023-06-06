package com.Unisports.Uni.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Unisports.Uni.model.modelUsuario;

public interface repositoryUsuario extends JpaRepository<modelUsuario, Long> {
	
	public List<modelUsuario> findAllByNomeContainingIgnoreCase(String nome);

	public Optional<modelUsuario> findByEmail(String email);

}
