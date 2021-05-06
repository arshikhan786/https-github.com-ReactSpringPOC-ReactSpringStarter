package com.test.server;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@SpringBootTest
@ContextConfiguration(classes = ServerApplication.class)
class ServerApplicationTests {

	@Test
	void contextLoads() {
		
	}

}
