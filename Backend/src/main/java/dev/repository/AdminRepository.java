package dev.repository;

import dev.domain.Admin;
import dev.domain.Art;
import dev.domain.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public class AdminRepository {

    private final SessionFactory sessionFactory;

    public AdminRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public Admin create(Admin admin) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        session.save(admin);
        return admin;
    }

    public Admin findById(int id) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Admin.class, id);
    }

    public void deleteById(int id) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        Admin admin = findById(id);
        session.delete(admin);
    }
}
