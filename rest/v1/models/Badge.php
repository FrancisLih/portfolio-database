<?php

Class Badge {

    public $badge_aid;
    public $badge_title;
    public $badge_image;
    public $badge_active;
    public $badge_date_published;
    public $badge_description;
    public $badge_created;
    public $badge_datetime;

    public $badge_search;
    
    public $connection;
    public $lastInsertedId;
    public $tblBadge;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBadge = "tbl_badge";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblBadge}";
            $sql .= "(badge_title, ";
            $sql .= "badge_image, ";
            $sql .= "badge_active, ";
            $sql .= "badge_date_published, ";
            $sql .= "badge_description, ";
            $sql .= "badge_created, ";
            $sql .= "badge_datetime ) values (";
            $sql .= ":badge_title, ";
            $sql .= ":badge_image, ";
            $sql .= ":badge_active, ";
            $sql .= ":badge_date_published, ";
            $sql .= ":badge_description, ";
            $sql .= ":badge_created, ";
            $sql .= ":badge_datetime) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "badge_title" => $this->badge_title,
                "badge_image" => $this->badge_image,
                "badge_active" => $this->badge_active,
                "badge_date_published" => $this->badge_date_published,
                "badge_description" => $this->badge_description,
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
            $sql .= "from {$this->tblBadge} ";
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
            $sql = "delete from {$this->tblBadge} ";
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
            $sql = "update {$this->tblBadge} set ";
            $sql .= "badge_title = :badge_title, ";
            $sql .= "badge_image = :badge_image, ";
            $sql .= "badge_date_published = :badge_date_published, ";
            $sql .= "badge_description = :badge_description, ";
            $sql .= "badge_category = :badge_category, ";
            $sql .= "badge_datetime = :badge_datetime ";
            $sql .= "where badge_aid  = :badge_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "badge_title" => $this->badge_title,
                "badge_image" => $this->badge_image,
                "badge_date_published" => $this->badge_date_published,
                "badge_description" => $this->badge_description,
                "badge_category" => $this->badge_category,
                "badge_datetime" => $this->badge_datetime,
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
            $sql = "update {$this->tblBadge} set ";
            $sql .= "badge_active = :badge_active, ";
            $sql .= "badge_datetime = :badge_datetime ";
            $sql .= "where badge_aid  = :badge_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "badge_active" => $this->badge_active,
                "badge_datetime" => $this->badge_datetime,
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
            $sql .= "from {$this->tblBadge} ";
            $sql .= "where badge_title like :badge_title ";
            $sql .= "order by badge_active desc, ";
            $sql .= "badge_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "badge_title" => "%{$this->badge_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

}