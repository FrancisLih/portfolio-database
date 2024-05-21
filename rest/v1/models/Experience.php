<?php

Class Experience {

    public $experience_aid;
    public $experience_image;
    public $experience_title;
    public $experience_is_active;
    public $experience_date_published;
    public $experience_created;
    public $experience_datetime;

    public $experience_search;
    
    public $connection;
    public $lastInsertedId;
    public $tblSkills;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSkills = "tbl_skills";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblSkills}";
            $sql .= "( experience_image, ";
            $sql .= "experience_title, ";
            $sql .= "experience_is_active, ";
            $sql .= "experience_date_published,";
            $sql .= "experience_created,";
            $sql .= "experience_datetime ) values (";
            $sql .= ":experience_image, ";
            $sql .= ":experience_title, ";
            $sql .= ":experience_is_active, ";
            $sql .= ":experience_date_published, ";
            $sql .= ":experience_created, ";
            $sql .= ":experience_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "experience_image" => $this->experience_image,
                "experience_title" => $this->experience_title,
                "experience_is_active" => $this->experience_is_active,
                "experience_date_published" => $this->experience_date_published,
                "experience_created" => $this->experience_created,
                "experience_datetime" => $this->experience_datetime
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
            $sql .= "from {$this->tblSkills} ";
            $sql .= "order by experience_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSkills} ";
            $sql .= "where experience_aid = :experience_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "experience_aid" => $this->experience_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblSkills} set ";
            $sql .= "experience_image = :experience_image, ";
            $sql .= "experience_title = :experience_title, ";
            $sql .= "experience_date_published = :experience_date_published ";
            $sql .= "where experience_aid  = :experience_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "experience_image" => $this->experience_image,
                "experience_title" => $this->experience_title,
                "experience_date_published" => $this->experience_date_published,
                "experience_aid" => $this->experience_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblSkills} set ";
            $sql .= "experience_is_active = :experience_is_active, ";
            $sql .= "experience_date_published = :experience_date_published ";
            $sql .= "where experience_aid  = :experience_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "experience_is_active" => $this->experience_is_active,
                "experience_date_published" => $this->experience_date_published,
                "experience_aid" => $this->experience_aid,
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
            $sql .= "from {$this->tblSkills} ";
            $sql .= "where experience_image like :experience_image ";
            $sql .= "order by experience_is_active desc, ";
            $sql .= "experience_image asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "experience_image" => "%{$this->experience_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

}