package com.example.turtlesportbe.model;

import com.example.turtlesportbe.model.auth.Account;
import jakarta.persistence.*;

@Entity
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name", columnDefinition = "varchar(255)", nullable = false)
    private String name;
    @Column(name = "content", columnDefinition = "longtext", nullable = false)
    private String content;
    @Column(name = "image", columnDefinition = "varchar(255)", nullable = false)
    private String image;
    @Column(name = "date_create", columnDefinition = "datetime", nullable = false)
    private String dateCreate;
    @Column(name = "deleted", columnDefinition = "bit(1) default 0", nullable = false)
    private boolean deleted;
    @ManyToOne
    @JoinColumn(name = "account_id",referencedColumnName = "accountId")
    private Account account;

    public News() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDateCreate() {
        return dateCreate;
    }

    public void setDateCreate(String dateCreate) {
        this.dateCreate = dateCreate;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
