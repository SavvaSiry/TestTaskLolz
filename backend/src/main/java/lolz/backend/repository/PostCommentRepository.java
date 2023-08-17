package lolz.backend.repository;

import lolz.backend.entity.PostComment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostCommentRepository extends CrudRepository<PostComment, Long> {
    List<PostComment> findByPostId(Long postId);
    void deleteByPostId(Long postId);
}
