package dev.repository;

import dev.domain.Art;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Repository
public class ArtRepository {

    private final SessionFactory sessionFactory;

    public ArtRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void create(Art art) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        session.save(art);
    }

    public List<Art> findAll() throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        Query<Art> userQuery = session.createQuery("from Art", Art.class);
        return userQuery.getResultList();
    }

    public Art findById(int id) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Art.class, id);
    }

    public void updateArtById(Art art) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        session.update(art);
    }

    public void deleteById(int id) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        Art art = findById(id);
        session.delete(art);
    }

    public Integer getArtCount() {
        Session session = sessionFactory.getCurrentSession();
        Long count = (Long) session.createQuery("SELECT COUNT(*) FROM Art").uniqueResult();
        return Math.toIntExact(count != null ? count : 0);
    }

    public List<Art> findByUserId(Integer userId) throws SQLException {
        Session session = sessionFactory.getCurrentSession();
        return Collections.singletonList(session.get(Art.class, userId));
    }
}