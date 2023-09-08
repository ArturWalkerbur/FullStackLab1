package com.full_stack.Lab1.repository;

import com.full_stack.Lab1.entity.Cars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface CarsRepository extends JpaRepository<Cars, Long> {
}
