package com.full_stack.Lab1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="CarsTable")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Cars {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "car_name")
    private String car_name;

    @Column(name = "model")
    private String model;

    @Column(name = "year")
    private String year;

    @Column(name = "volume")
    private String volume;

}
