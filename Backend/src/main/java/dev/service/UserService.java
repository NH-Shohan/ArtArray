package dev.service;

import dev.domain.User;
import dev.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) throws SQLException {
        return userRepository.create(user);
    }

    public List<User> getAllUsers() throws SQLException {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(int id) throws SQLException {
        return Optional.ofNullable(userRepository.findById(id));
    }

    public void deleteUserById(int id) throws SQLException {
        userRepository.deleteById(id);
    }

    public Integer getUserCount() {
        return userRepository.getUserCount();
    }
}
