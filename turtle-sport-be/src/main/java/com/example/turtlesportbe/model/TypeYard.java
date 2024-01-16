package com.example.turtlesportbe.model;

import jakarta.persistence.*;

@Entity
@Table(name = "type_yard")
public class TypeYard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nameType;


    public TypeYard() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }

}
