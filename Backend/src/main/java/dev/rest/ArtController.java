package dev.rest;

import dev.domain.Art;
import dev.service.ArtService;
import org.hibernate.Hibernate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
public class ArtController {

    private final ArtService artService;

    public ArtController(ArtService artService) {
        this.artService = artService;
    }

    @PostMapping("/arts/create")
    public String createArt(@RequestBody Art art) throws SQLException {
        artService.createArt(art);
        return "Art created successfully";
    }

    @GetMapping("/arts")
    public List<Art> getAllArts() throws SQLException {
        return artService.getAllArts();
    }

    @GetMapping("/arts/{id}")
    public Art getArtById(@PathVariable int id) throws SQLException {
        return artService.getArtById(id);
    }

    @PutMapping("/arts/{id}")
    public String updateArtById(@PathVariable int id, @RequestBody Art art) throws SQLException {
        artService.updateArtById(id, art);
        return "Update Successful";
    }

    @DeleteMapping("/arts/{id}")
    public String deleteArtById(@PathVariable int id) throws SQLException {
        artService.deleteArtById(id);
        return "Art deleted successfully";
    }

    @GetMapping("/arts/count")
    public Integer getArtCount() {
        return artService.getArtCount();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Art>> getArtsByUserId(@PathVariable Integer userId) throws SQLException {
        List<Art> arts = artService.getArtsByUserId(userId);

        // Initialize the arts collection to avoid LazyInitializationException
        for (Art art : arts) {
            Hibernate.initialize(art.getUser().getArts());
        }

        return ResponseEntity.ok(arts);
    }
}
