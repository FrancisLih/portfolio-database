<?php

Class Certificate {

    public $certificate_aid;
    public $certificate_image;
    public $certificate_title;
    public $certificate_description;
    public $certificate_is_active;
    public $certificate_date_published;
    public $certificate_created;
    public $certificate_datetime;

    public $certificate_search;
    
    public $connection;
    public $lastInsertedId;
    public $tblCertificate;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCertificate = "tbl_certificate";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblCertificate}";
            $sql .= "( certificate_image, ";
            $sql .= "certificate_title, ";
            $sql .= "certificate_is_active, ";
            $sql .= "certificate_date_published,";
            $sql .= "certificate_created,";
            $sql .= "certificate_datetime ) values (";
            $sql .= ":certificate_image, ";
            $sql .= ":certificate_title, ";
            $sql .= ":certificate_is_active, ";
            $sql .= ":certificate_date_published, ";
            $sql .= ":certificate_created, ";
            $sql .= ":certificate_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "certificate_image" => $this->certificate_image,
                "certificate_title" => $this->certificate_title,
                "certificate_is_active" => $this->certificate_is_active,
                "certificate_date_published" => $this->certificate_date_published,
                "certificate_created" => $this->certificate_created,
                "certificate_datetime" => $this->certificate_datetime
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
            $sql .= "from {$this->tblCertificate} ";
            $sql .= "order by certificate_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblCertificate} ";
            $sql .= "where certificate_aid = :certificate_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "certificate_aid" => $this->certificate_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblCertificate} set ";
            $sql .= "certificate_image = :certificate_image, ";
            $sql .= "certificate_title = :certificate_title, ";
            $sql .= "certificate_date_published = :certificate_date_published ";
            $sql .= "where certificate_aid  = :certificate_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "certificate_image" => $this->certificate_image,
                "certificate_title" => $this->certificate_title,
                "certificate_date_published" => $this->certificate_date_published,
                "certificate_aid" => $this->certificate_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblCertificate} set ";
            $sql .= "certificate_is_active = :certificate_is_active, ";
            $sql .= "certificate_date_published = :certificate_date_published ";
            $sql .= "where certificate_aid  = :certificate_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "certificate_is_active" => $this->certificate_is_active,
                "certificate_date_published" => $this->certificate_date_published,
                "certificate_aid" => $this->certificate_aid,
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
            $sql .= "from {$this->tblCertificate} ";
            $sql .= "where certificate_image like :certificate_image ";
            $sql .= "order by certificate_is_active desc, ";
            $sql .= "certificate_image asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "certificate_image" => "%{$this->certificate_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

}