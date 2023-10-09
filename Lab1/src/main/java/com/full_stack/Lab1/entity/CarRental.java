package com.full_stack.Lab1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Entity
@Table(name = "car_rental")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarRental {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "car_id")
    private Cars car;

    @ManyToOne(fetch = FetchType.EAGER)
    private Renters renter;

    @Column(name = "rental_start_date")
    private Date rentalStartDate;

    @Column(name = "rental_end_date")
    private Date rentalEndDate;


}

