package dev.repository;

import dev.domain.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public class UserRepository {

    private final SessionFactory sessionFactory;

    public UserRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public User create(User user) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        session.save(user);
        return user;
    }

    public List<User> findAll() throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        Query<User> userQuery = session.createQuery("from User", User.class);
        return userQuery.getResultList();
    }

    public User findById(int id) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        return session.get(User.class, id);
    }

    public void updateUserById(User user) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        session.update(user);
    }

    public void deleteById(int id) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        User user = findById(id);
        session.delete(user);
    }

    public Integer getUserCount() {
        Session session = sessionFactory.getCurrentSession();
        Long count = (Long) session.createQuery("SELECT COUNT(*) FROM User").uniqueResult();
        return Math.toIntExact(count != null ? count : 0);
    }
}
