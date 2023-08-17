package lolz.backend.service;

import lolz.backend.entity.Post;
import lolz.backend.entity.PostComment;
import lolz.backend.repository.PostCommentRepository;
import lolz.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private PostRepository postRepository;
    private PostCommentRepository commentRepository;

    public PostService(PostRepository postRepository, PostCommentRepository commentRepository) {
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
    }

    //PostComments
    public PostComment createComment(PostComment comment) {
        return commentRepository.save(comment);
    }

    public List<PostComment> getCommentsByPostId(Long postId) {
        return commentRepository.findByPostId(postId);
    }

    public void deleteCommentById(Long commentId) {
        commentRepository.deleteById(commentId);
    }

    //Posts
    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public Post updatePost(Long postId, Post updatedPost) {
        Post existingPost = getPostById(postId);
        if (existingPost != null) {
            existingPost.setTitle(updatedPost.getTitle());
            existingPost.setDescription(updatedPost.getDescription());
            return postRepository.save(existingPost);
        }
        return null;
    }

    public Long getPostCount() {
        return postRepository.count();
    }

    public void deletePost(Long postId) {
        postRepository.deleteById(postId);
        commentRepository.deleteByPostId(postId);
    }

    public Post getPostById(Long postId) {
        return postRepository.findById(postId).orElse(null);
    }

    public List<Post> getAllPosts(Pageable pageable) {
        return postRepository.findAll(pageable).getContent();
    }
}
