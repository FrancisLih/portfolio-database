<?php

Class Badge {

    public $badge_aid;
    public $badge_image;
    public $badge_title;
    public $badge_active;
    public $badge_date_published;
    public $badge_created;
    public $badge_datetime;

    public $badge_search;
    
    public $connection;
    public $lastInsertedId;
    public $tblexperience;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblexperience = "tbl_experience";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblexperience}";
            $sql .= "( badge_image, ";
            $sql .= "badge_title, ";
            $sql .= "badge_active, ";
            $sql .= "badge_date_published,";
            $sql .= "badge_created,";
            $sql .= "badge_datetime ) values (";
            $sql .= ":badge_image, ";
            $sql .= ":badge_title, ";
            $sql .= ":badge_active, ";
            $sql .= ":badge_date_published, ";
            $sql .= ":badge_created, ";
            $sql .= ":badge_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "badge_image" => $this->badge_image,
                "badge_title" => $this->badge_title,
                "badge_active" => $this->badge_active,
                "badge_date_published" => $this->badge_date_published,
                "badge_created" => $this->badge_created,
                "badge_datetime" => $this->badge_datetime
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOExeception $ex) {
            $query = false;
        }

        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblexperience} ";
            $sql .= "order by badge_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblexperience} ";
            $sql .= "where badge_aid = :badge_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "badge_aid" => $this->badge_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblexperience} set ";
            $sql .= "badge_image = :badge_image, ";
            $sql .= "badge_title = :badge_title, ";
            $sql .= "badge_date_published = :badge_date_published ";
            $sql .= "where badge_aid  = :badge_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "badge_image" => $this->badge_image,
                "badge_title" => $this->badge_title,
                "badge_date_published" => $this->badge_date_published,
                "badge_aid" => $this->badge_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblexperience} set ";
            $sql .= "badge_active = :badge_active, ";
            $sql .= "badge_date_published = :badge_date_published ";
            $sql .= "where badge_aid  = :badge_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "badge_active" => $this->badge_active,
                "badge_date_published" => $this->badge_date_published,
                "badge_aid" => $this->badge_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblexperience} ";
            $sql .= "where badge_image like :badge_image ";
            $sql .= "order by badge_active desc, ";
            $sql .= "badge_image asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "badge_image" => "%{$this->badge_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

}