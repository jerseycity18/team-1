package com.codeforgood.DAO;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.jdbc.core.JdbcTemplate;

public class BuddyDAO implements InitializingBean {

    BasicDataSource dataSource;
    JdbcTemplate jdbcTemplate;




    public void setDataSource(BasicDataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public void afterPropertiesSet() throws Exception {
      jdbcTemplate=new JdbcTemplate(dataSource);
    }
}
