<?php

Class Works {

    public $works_aid;
    public $works_image;
    public $works_title;
    public $works_description;
    public $works_is_active;
    public $works_date_published;

    public $works_search;
    
    public $connection;
    public $lastInsertedId;
    public $tblWorks;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWorks = "tbl_works";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblWorks}";
            $sql .= "( works_image, ";
            $sql .= "works_title, ";
            $sql .= "works_is_active, ";
            $sql .= "works_description, ";
            $sql .= "works_date_published ) values (";
            $sql .= ":works_image, ";
            $sql .= ":works_title, ";
            $sql .= ":works_is_active, ";
            $sql .= ":works_description, ";
            $sql .= ":works_date_published) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "works_image" => $this->works_image,
                "works_title" => $this->works_title,
                "works_is_active" => $this->works_is_active,
                "works_description" => $this->works_description,
                "works_date_published" => $this->works_date_published,
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
            $sql .= "from {$this->tblWorks} ";
            $sql .= "order by works_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblWorks} ";
            $sql .= "where works_aid = :works_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "works_aid" => $this->works_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblWorks} set ";
            $sql .= "works_image = :works_image, ";
            $sql .= "works_title = :works_title, ";
            $sql .= "works_description = :works_description, ";
            $sql .= "works_date_published = :works_date_published ";
            $sql .= "where works_aid  = :works_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "works_image" => $this->works_image,
                "works_title" => $this->works_title,
                "works_description" => $this->works_description,
                "works_date_published" => $this->works_date_published,
                "works_aid" => $this->works_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblWorks} set ";
            $sql .= "works_is_active = :works_is_active, ";
            $sql .= "works_date_published = :works_date_published ";
            $sql .= "where works_aid  = :works_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "works_is_active" => $this->works_is_active,
                "works_date_published" => $this->works_date_published,
                "works_aid" => $this->works_aid,
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
            $sql .= "from {$this->tblWorks} ";
            $sql .= "where works_image like :works_image ";
            $sql .= "order by works_is_active desc, ";
            $sql .= "works_image asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "works_image" => "%{$this->works_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

}