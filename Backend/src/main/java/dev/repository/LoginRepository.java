package dev.repository;

import dev.domain.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public class LoginRepository {

    private final SessionFactory sessionFactory;

    public LoginRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public User loginUserById(int id) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        return session.get(User.class, id);
    }
}