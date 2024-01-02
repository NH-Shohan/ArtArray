package dev.service;

import dev.domain.Art;
import dev.repository.ArtRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLException;
import java.util.List;

@Service
@Transactional
public class ArtService {

    private final ArtRepository artRepository;

    public ArtService(ArtRepository artRepository) {
        this.artRepository = artRepository;
    }

    public void createArt(Art art) throws SQLException {
        artRepository.create(art);
    }

    public List<Art> getAllArts() throws SQLException {
        return artRepository.findAll();
    }

    public Art getArtById(int id) throws SQLException {
        return artRepository.findById(id);
    }

    public void updateArtById(int id, Art art) throws SQLException {
        Art existingArt = artRepository.findById(id);
        if (existingArt != null) {
            existingArt.setTitle(art.getTitle());
            existingArt.setArtist(art.getArtist());
            existingArt.setImage(art.getImage());
            existingArt.setPrice(art.getPrice());
            artRepository.updateArtById(existingArt);
        }
    }

    public void deleteArtById(int id) throws SQLException {
        artRepository.deleteById(id);
    }

    public Integer getArtCount() {
        return artRepository.getArtCount();
    }

    public List<Art> getArtsByUserId(Integer userId) throws SQLException {
        return artRepository.findByUserId(userId);
    }
}
