package lolz.backend.controller;

import lolz.backend.entity.PostComment;
import lolz.backend.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentsController {

    private final PostService postCommentService;

    public CommentsController(PostService postCommentService) {
        this.postCommentService = postCommentService;
    }

    @PostMapping
    public PostComment createComment(@RequestBody PostComment comment) {
        return postCommentService.createComment(comment);
    }

    @GetMapping("/post/{postId}")
    public List<PostComment> getCommentsByPostId(@PathVariable Long postId) {
        return postCommentService.getCommentsByPostId(postId);
    }

    @DeleteMapping("/{commentId}")
    public void deleteCommentById(@PathVariable Long commentId) {
        postCommentService.deleteCommentById(commentId);
    }
}
