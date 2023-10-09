package com.full_stack.Lab1.repository;

import com.full_stack.Lab1.entity.Renters;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface RentersRepository extends JpaRepository<Renters, Long> {
}
