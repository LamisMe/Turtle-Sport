package com.example.turtlesportbe.model;

import com.example.turtlesportbe.model.auth.Account;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "datetime")
    private LocalDateTime date;

    @Column(columnDefinition = "longtext")
    private String content;

    @Column(columnDefinition = "varchar(255)")
    private String image;
    @Column(name = "is_deleted", columnDefinition = "int(1) default 0")
    boolean isDeleted;
    @ManyToOne
    @JoinColumn (name = "account_id",referencedColumnName = "id")
    private Account account;
    @JsonBackReference
    @OneToMany (mappedBy = "post")
    private Set<LikeDetail> likeDetails;

    @JsonBackReference
    @OneToMany(mappedBy = "post")
    private Set<Comment> commentSet;

    public Post() {
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

    public Set<LikeDetail> getLikeDetails() {
        return likeDetails;
    }

    public void setLikeDetails(Set<LikeDetail> likeDetails) {
        this.likeDetails = likeDetails;
    }

    public Set<Comment> getCommentSet() {
        return commentSet;
    }

    public void setCommentSet(Set<Comment> commentSet) {
        this.commentSet = commentSet;
    }
}
