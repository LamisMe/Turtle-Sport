package com.example.turtlesportbe.model;

import jakarta.persistence.*;

@Entity
@Table(name = "type_employee")
public class TypeEmployee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String typeName;


    public TypeEmployee() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

}
