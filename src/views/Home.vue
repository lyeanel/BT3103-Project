<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex xs12 md8 offset-md2>
          <v-card flat class="card--flex-toolbar" color="transparent">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <h2>NUSTutors</h2>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm6 md5 lg5>
                  <v-hover>
                    <v-card
                      slot-scope="{ hover }"
                      :class="`elevation-${hover ? 12 : 2}`"
                      class="profile"
                    >
                      <div class="top-card">
                        <v-avatar size="100" class="avatar"
                          ><img
                            src="https://i.pinimg.com/originals/57/3e/9e/573e9e53ee78e2a88c32d53bd8a5bfd2.jpg"
                            alt="dog"
                        /></v-avatar>
                      </div>

                      <v-card-title primary-title>
                        <div>
                          <h3>
                            {{ name }}
                          </h3>
                          <div>
                            <h6>{{ course }}</h6>
                            <body>
                              Hourly Rate: $ {{ rate }}/hr <br />
                              Number of Past Tutees: {{ paststudents }}<br />
                              Currently tutoring: {{ currentstudents }}<br />
                              Rating: {{ rating }} <br />
                            </body>
                            <div class="review">
                              click here to see reviews written by Tan's past
                              tutees
                            </div>
                          </div>
                        </div>
                      </v-card-title>

                      <v-card-actions> </v-card-actions>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Jon Tan',
      course: 'Year 4 Computer Science',
      rate: 10,
      paststudents: 25,
      currentstudents: 5,
      rating: 'star star star',
      links: [
        {
          id: '1',
          title: 'Dashboard',
          description:
            'Get detailed anlytics to measure and analyze how users engage with your app',
          color: '#F1BA79'
        },
        {
          id: '2',
          title: 'Storage',
          description:
            'Store and retrieve user-generated content, such as images, audio, and videos, without server-side code.',
          color: 'teal'
        },
        {
          id: '3',
          title: 'Notifications',
          description:
            'Manage your notification campaigns and send messages to reach the right users at the right time',
          color: 'blue'
        },
        {
          id: '4',
          title: 'Authentification',
          description:
            'Authenticate and manage users from a variety of providers without server-side-code',
          color: 'purple'
        }
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  color: #f1ba79;
  font-weight: bold;
}
h3 {
  margin-top: 2.5rem;
}
.avatar {
  margin: -3.5rem;
}
.top-card {
  height: 8rem;
  background-color: #f1ba79;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.outine-2 {
  border: 2px solid white;
}

.card--flex-toolbar {
}

.review {
  text-decoration: underline;
  font-size: 0.8em;
  padding: 1em 0;
  color: gray;
  white-space: normal;
}
</style>
