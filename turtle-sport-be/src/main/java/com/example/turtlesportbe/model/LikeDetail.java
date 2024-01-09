package com.example.turtlesportbe.model;

import com.example.turtlesportbe.model.auth.Account;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class LikeDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "datetime")
    private LocalDateTime date;
    @Column(name = "is_deleted", columnDefinition = "int(1) default 0")
    boolean isDeleted ;
    @ManyToOne
    @JoinColumn(name = "account_id",referencedColumnName = "id")
    private Account account;

    @ManyToOne
    @JoinColumn (name = "post_id",referencedColumnName = "id")
    private Post post;
    public LikeDetail() {
    }

    public LikeDetail(Integer id, LocalDateTime date, boolean isDeleted, Account account, Post post) {
        this.id = id;
        this.date = date;
        this.isDeleted = isDeleted;
        this.account = account;
        this.post = post;
    }

    public LikeDetail( Account account, Post post) {
        this.account = account;
        this.post = post;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
