package dev.service;

import dev.domain.User;
import dev.repository.LoginRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLException;

@Service
@Transactional
public class LoginService {

    private final LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public User getUserById(int id) throws SQLException {
        return loginRepository.loginUserById(id);
    }
}
